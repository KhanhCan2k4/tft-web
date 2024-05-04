
import AdminCategoryIndex from "../../components/AdminCategoryIndex";
import AdminLayout from "../../layouts/AdminLayout";

function AdminCategories() {

    const categories = [
        {
            id: 1,
            name: "Danh mục 1",
            added_at: "09/04/2024",
            updated_at: "09/04/2024",

        },
        {
            id: 2,
            name: "Danh mục 2",
            added_at: "09/04/2024",
            updated_at: "09/04/2024",

        }
    ]

    return (
        <AdminLayout slot={
            (
                <>
                    <div className="container">
                        <AdminCategoryIndex categories={categories} />
                    </div>
                </>
            )
        }>
        </AdminLayout>
    )
}

export default AdminCategories;