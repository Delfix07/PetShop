export default function ProductForm({
    onSave,
    newProduct,
    setNewProduct,
    editId,
    onCancel
}) {

    function onSubmit(event) {
        event.preventDefault()
        onSave(newProduct)
    }

    function handleChange(event) {
        const { name, value } = event.target
        setNewProduct({
            ...newProduct,
            [name]:
                name === "price" || name === "stock"
                    ? Number(value)
                    : value
        })
    }

    function handlePetTypeChange(event) {
        const selectedPetTypes = Array.from(
            event.target.selectedOptions,
            (option) => option.value
        )
        setNewProduct({
            ...newProduct,
            petType: selectedPetTypes
        })
    }
    const currentPetTypes = newProduct.petType || [];


    return (
        <form onSubmit={onSubmit}>
            <h2>{editId ? "Edit Product" : "Create Product"}</h2>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={newProduct.name}
                onChange={handleChange}
            />
            <label htmlFor="description">Description</label>
            <textarea
                id="description"
                name="description"
                value={newProduct.description}
                onChange={handleChange}
            />
            <label htmlFor="price">Price</label>
            <input
                type="number"
                id="price"
                name="price"
                value={newProduct.price}
                onChange={handleChange}
            />
            <label htmlFor="petType">Pet Type</label>
            <select
                id="petType"
                name="petType"
                multiple
                onChange={handlePetTypeChange}
            >
                <option option value="dog" selected={currentPetTypes.includes("dog")}>Dog</option>
                <option value="cat" selected={currentPetTypes.includes("cat")}>Cat</option>
                <option value="fish" selected={currentPetTypes.includes("fish")}>Fish</option>
                <option value="other" selected={currentPetTypes.includes("other")}>Other</option>
            </select>
            <label htmlFor="stock">Stock</label>
            <input
                type="number"
                id="stock"
                name="stock"
                min="0"
                value={newProduct.stock}
                onChange={handleChange}
            />
            <label htmlFor="category">Category</label>
            <input
                type="text"
                id="category"
                name="category"
                value={newProduct.category}
                onChange={handleChange}
            />
            <label htmlFor="brand">Brand</label>
            <input
                type="text"
                id="brand"
                name="brand"
                value={newProduct.brand}
                onChange={handleChange}
            />
            <label htmlFor="image">Image URL</label>
            <label>Images</label>
            {newProduct.image.map((image, index) => (
                <div key={index}>
                    <input
                        type="text"
                        value={image}
                        placeholder={`Image ${index + 1} URL`}
                        onChange={(event) => {
                            const newImages = [...newProduct.image]
                            newImages[index] = event.target.value
                            setNewProduct({
                                ...newProduct,
                                image: newImages
                            })
                        }}
                    />
                    {newProduct.image.length > 1 && (
                        <button
                            type="button"
                            onClick={() => {
                                const newImages = newProduct.image.filter(
                                    (_, imageIndex) => imageIndex !== index
                                )
                                setNewProduct({
                                    ...newProduct,
                                    image: newImages
                                })
                            }}
                        >Remove</button>
                    )}
                </div>
            ))}
            <button
                type="button"
                onClick={() => {
                    setNewProduct({
                        ...newProduct,
                        image: [...newProduct.image, ""]
                    })
                }}
            >Add image</button>
            <button type="submit">{editId ? "Edit Product" : "Create Product"}</button>
            <button
                type="button"
                onClick={() => {
                    setNewProduct({
                        name: "",
                        description: "",
                        price: "",
                        petType: [],
                        stock: 0,
                        category: "",
                        brand: "",
                        image: [""]
                    })
                    onCancel()
                }}
            >Cancel</button>
        </form>
    )
}

//Dejar la opcion other?

//Profe si estas leyendo esto, originalmente mi idea era Cats, Dogs, Fish, Birds y Exotic(serpientes, etc) Pero no me dio el tiempo
//jajaja asi que quedo solo cats, dogs y fish...Por eso tambien en la foto del carrusel de promos hay aves. 