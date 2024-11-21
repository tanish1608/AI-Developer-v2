import ErrorPage from "@/components/ErrorPage";
import style from "./Error.module.css";

export default function Page404Wrapper() {
return (
<div className={`container mx-auto p-4 ${style.errorContainer}`}>
<h1 className="text-3xl font-bold">404 - Not Found</h1>
<ErrorPage />
</div>
);
}