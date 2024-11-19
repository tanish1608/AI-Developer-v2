import Page from '@/components/Page';
import styles from './Page.module.css';

export default function IndexPage() {
return (
<div className={`container mx-auto p-4 ${styles.pageContainer}`}>
<h1 className="text-3xl font-bold">Calculator</h1>
<Page />
</div>
);
}