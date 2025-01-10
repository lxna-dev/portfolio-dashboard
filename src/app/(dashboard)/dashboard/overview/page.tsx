import {
  Users,
  Calendar,
  TrendingUp,
  TrendingDown,
  DollarSign,
  UserPlus,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const recentActivity = [
  {
    client: "Sarah Wilson",
    type: "New Reservation",
    date: "2024-01-10",
    status: "Confirmed",
  },
  {
    client: "Michael Brown",
    type: "Cancelled Booking",
    date: "2024-01-09",
    status: "Cancelled",
  },
  {
    client: "Emma Davis",
    type: "Payment Received",
    date: "2024-01-09",
    status: "Completed",
  },
  {
    client: "James Johnson",
    type: "New Reservation",
    date: "2024-01-08",
    status: "Pending",
  },
  {
    client: "Lisa Anderson",
    type: "Modified Booking",
    date: "2024-01-08",
    status: "Updated",
  },
];

const Overview = () => {
  return (
    <>
      <main className="p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="mr-1 inline h-4 w-4 text-green-500" />
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Clients</CardTitle>
              <UserPlus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2,350</div>
              <p className="text-xs text-muted-foreground">
                <TrendingDown className="mr-1 inline h-4 w-4 text-red-500" />
                -4% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Bookings
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">432</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="mr-1 inline h-4 w-4 text-green-500" />
                +12% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Customer Satisfaction
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98%</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="mr-1 inline h-4 w-4 text-green-500" />
                +2% from last month
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Client</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentActivity.map((activity, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {activity.client}
                      </TableCell>
                      <TableCell>{activity.type}</TableCell>
                      <TableCell>{activity.date}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                            activity.status === "Confirmed"
                              ? "bg-green-100 text-green-700"
                              : activity.status === "Cancelled"
                                ? "bg-red-100 text-red-700"
                                : activity.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : activity.status === "Completed"
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {activity.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default Overview;
