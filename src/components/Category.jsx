import "../css/Categories.css";
import categories from "../data/Categories";

function Categories() {
    return (
        <section className="categories">

            <h1>Browse Categories</h1>

            <div className="category-container">

                {
                    categories.map((category) => {
                        return (

                            <div
                                className="category-card"
                                key={category.id}
                            >

                                <h2>{category.image}</h2>

                                <p>{category.name}</p>

                            </div>

                        );
                    })
                }

            </div>

        </section>
    );
}

export default Categories;