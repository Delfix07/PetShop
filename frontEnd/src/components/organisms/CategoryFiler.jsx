    export default function CategoryFilter({
    categories,
    selectedCategory,
    setSelectedCategory
}) {

     return (

        <div className="category-filter">
            <button onClick={() => setSelectedCategory("All")}>All</button>

            {categories.map(category => (
                <button
                    key={category._id}
                    onClick={() => setSelectedCategory(category.name)}>
                    {category.name}
                </button>
            ))}

        </div>

    );

}