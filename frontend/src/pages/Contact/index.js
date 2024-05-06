import DefaultLayout from "../../layouts/DefaultLayout";

export default function ContactPage() {

    return (
        <DefaultLayout 
            slot={
                <div className="about-page">
                    <h1>Here is About page</h1>
                </div>
            }>
        </DefaultLayout>
    );
}