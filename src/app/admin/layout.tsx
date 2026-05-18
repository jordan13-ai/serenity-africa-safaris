import { SessionWrapper } from "@/components/admin/SessionWrapper"
import { AdminSidebar } from "@/components/admin/AdminSidebar"
import { AdminHeader } from "@/components/admin/AdminHeader"

export const metadata = { title: "CMS — Serenity Africa Safaris" }

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionWrapper>
      <div className="min-h-screen bg-[#F5F2ED] flex">
        <AdminSidebar />
        <main className="flex-1 ml-64 min-h-screen flex flex-col">
          <AdminHeader />
          <div className="flex-1">
            {children}
          </div>
        </main>
      </div>
    </SessionWrapper>
  )
}
