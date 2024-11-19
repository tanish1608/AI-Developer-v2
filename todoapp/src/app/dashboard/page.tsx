import ToDoWrapper from "@/components/ToDoWrapper";
import styles from "./Dashboard.module.css";

export default function DashboardPage() {
return (
<div className={`container mx-auto p-4 ${styles.dashboardContainer}`}>
<h1 className="text-3xl font-bold">To-Do List</h1>
<ToDoWrapper />
</div>
);
}