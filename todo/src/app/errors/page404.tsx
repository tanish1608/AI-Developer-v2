import Page404Wrapper from "@/components/page404";
import styles from "./Error.module.css";

export default function ErrorPage404() {
return (
<div className={`container mx-auto p-4 ${styles.errorContainer}`}>
<h1 className="text-3xl font-bold">404 - Not Found</h1>
<Page404Wrapper />
</div>
);
}