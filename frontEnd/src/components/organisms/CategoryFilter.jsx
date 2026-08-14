import "./CategoryFilter.css";

export default function CategoryFilter({
    categories,
    selectedCategory,
    setSelectedCategory
}) {
    return (
        <div className="categoryFilter">
            <button
                onClick={() => setSelectedCategory("All")}
                className={selectedCategory === "All" ? "active" : ""}
            >All</button>
            {categories.map(category => (
                <button
                    key={category._id}
                    onClick={() => setSelectedCategory(category.name)}
                    className={
                        selectedCategory === category.name
                            ? "active"
                            : ""
                    }
                >{category.name}</button>
            ))}
        </div>
    )
}