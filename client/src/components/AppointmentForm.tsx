import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertAppointmentSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import type { Doctor } from "@shared/schema";

export default function AppointmentForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");

  const form = useForm({
    resolver: zodResolver(insertAppointmentSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      department: "",
      doctorId: undefined,
      preferredDate: "",
      message: "",
    },
  });

  const { data: doctors = [] } = useQuery<Doctor[]>({
    queryKey: ["/api/doctors"],
  });

  const filteredDoctors = selectedDepartment 
    ? doctors.filter(doctor => doctor.department === selectedDepartment)
    : doctors;

  const createAppointmentMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest("POST", "/api/appointments", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Appointment Booked Successfully!",
        description: "We'll confirm your appointment within 2 hours via phone or email.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/appointments"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Booking Failed",
        description: error.message || "Failed to book appointment. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: any) => {
    const appointmentData = {
      ...data,
      doctorId: data.doctorId ? parseInt(data.doctorId) : undefined,
    };
    createAppointmentMutation.mutate(appointmentData);
  };

  return (
    <Card className="max-w-4xl mx-auto bg-care-bg rounded-2xl shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl lg:text-4xl font-bold care-dark mb-4">
          Book Your Appointment
        </CardTitle>
        <p className="text-lg care-gray">
          Schedule your visit with our expert doctors. We're here to provide the best care for you and your family.
        </p>
      </CardHeader>
      
      <CardContent className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="care-dark font-semibold">Full Name *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter your full name" 
                      className="focus:border-care-blue"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="care-dark font-semibold">Phone Number *</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel"
                      placeholder="Enter your phone number" 
                      className="focus:border-care-blue"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="care-dark font-semibold">Email Address *</FormLabel>
                  <FormControl>
                    <Input 
                      type="email"
                      placeholder="Enter your email" 
                      className="focus:border-care-blue"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="care-dark font-semibold">Department *</FormLabel>
                  <Select 
                    onValueChange={(value) => {
                      field.onChange(value);
                      setSelectedDepartment(value);
                      form.setValue("doctorId", undefined);
                    }}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="focus:border-care-blue">
                        <SelectValue placeholder="Select Department" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="pediatrics">Pediatrics</SelectItem>
                      <SelectItem value="gynecology">Gynecology</SelectItem>
                      <SelectItem value="general">General Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="doctorId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="care-dark font-semibold">Preferred Doctor</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                    <FormControl>
                      <SelectTrigger className="focus:border-care-blue">
                        <SelectValue placeholder="Any Available Doctor" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="any">Any Available Doctor</SelectItem>
                      {filteredDoctors.map((doctor) => (
                        <SelectItem key={doctor.id} value={doctor.id.toString()}>
                          {doctor.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preferredDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="care-dark font-semibold">Preferred Date *</FormLabel>
                  <FormControl>
                    <Input 
                      type="date"
                      className="focus:border-care-blue"
                      min={new Date().toISOString().split('T')[0]}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="md:col-span-2">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="care-dark font-semibold">Message (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        rows={4}
                        placeholder="Any additional information or concerns..."
                        className="focus:border-care-blue"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="md:col-span-2 text-center">
              <Button 
                type="submit" 
                size="lg"
                disabled={createAppointmentMutation.isPending}
                className="bg-care-green hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                {createAppointmentMutation.isPending ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>Booking...
                  </>
                ) : (
                  <>
                    <i className="fas fa-calendar-check mr-2"></i>Book Appointment
                  </>
                )}
              </Button>
              <p className="care-gray text-sm mt-4">
                We'll confirm your appointment within 2 hours via phone or email
              </p>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
