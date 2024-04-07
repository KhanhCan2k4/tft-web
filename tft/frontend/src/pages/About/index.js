import DefaultLayout from "../../layouts/DefaultLayout";

export default function AboutPage() {
    return (
        <DefaultLayout 
            slot={
               <h1>Here is About page</h1>
            }>
        </DefaultLayout>
    );
}