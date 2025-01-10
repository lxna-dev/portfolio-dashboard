"use client"

import { Search } from "'lucide-react'"
import { Home, Users, Calendar, FileText, List, LogOut, TrendingUp, TrendingDown, DollarSign, UserPlus } from "'lucide-react'"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar"

const menuItems = [
  { icon: Home, label: "Overview", href: "#" },
  { icon: Users, label: "Client List", href: "#" },
  { icon: Calendar, label: "Reservations", href: "#" },
  { icon: FileText, label: "Reports", href: "#" },
  { icon: List, label: "Smart List", href: "#" },
]

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
]

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-white dark:bg-slate-950">
        <Sidebar className="border-r" variant="sidebar">
          <SidebarHeader className="border-b px-6 py-3">
            <h2 className="text-lg font-semibold">DASHBOARD</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.href}
                      className="flex items-center gap-3 px-3 py-2"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t p-6">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className="flex-1">
          <div className="flex h-16 items-center gap-4 border-b px-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-slate-500 dark:text-slate-400" />
              <Input
                placeholder="Search"
                className="pl-8"
              />
            </div>
            <Button variant="outline" size="icon">
              <span className="sr-only">Settings</span>
              <span className="h-4 w-4">⚙</span>
            </Button>
            <Button variant="outline" size="icon">
              <span className="sr-only">Account</span>
              <span className="h-4 w-4">👤</span>
            </Button>
          </div>
          <main className="p-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Revenue
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    <TrendingUp className="mr-1 h-4 w-4 text-green-500 inline" />
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    New Clients
                  </CardTitle>
                  <UserPlus className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2,350</div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    <TrendingDown className="mr-1 h-4 w-4 text-red-500 inline" />
                    -4% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Bookings
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">432</div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    <TrendingUp className="mr-1 h-4 w-4 text-green-500 inline" />
                    +12% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Customer Satisfaction
                  </CardTitle>
                  <Users className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">98%</div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    <TrendingUp className="mr-1 h-4 w-4 text-green-500 inline" />
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
                          <TableCell className="font-medium">{activity.client}</TableCell>
                          <TableCell>{activity.type}</TableCell>
                          <TableCell>{activity.date}</TableCell>
                          <TableCell>
                            <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                              activity.status === "'Confirmed'" ? "'bg-green-100 text-green-700'" :
                              activity.status === "'Cancelled'" ? "'bg-red-100 text-red-700'" :
                              activity.status === "'Pending'" ? "'bg-yellow-100 text-yellow-700'" :
                              activity.status === "'Completed'" ? "'bg-blue-100 text-blue-700'" :
                              "'bg-gray-100 text-gray-700'"
                            }`}>
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
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

