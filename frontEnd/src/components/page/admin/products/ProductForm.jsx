import "./ProductForm.css";
import { useState } from "react";
import validateProduct from "../../../utils/ValidateProduct";

export default function ProductForm({
    onSave,
    newProduct,
    setNewProduct,
    editId,
    onCancel
}) {
    const [errors, setErrors] = useState({
        name: "",
        description: "",
        price: "",
        petType: "",
        stock: "",
        category: "",
        brand: "",
        image: ""
    })

    function onSubmit(event) {
        event.preventDefault()
        const newErrors = validateProduct(newProduct)
        setErrors(newErrors)
        const hasErrors =
            newErrors.name !== "" ||
            newErrors.description !== "" ||
            newErrors.price !== "" ||
            newErrors.petType !== "" ||
            newErrors.stock !== "" ||
            newErrors.category !== "" ||
            newErrors.brand !== "" ||
            newErrors.image !== ""
        if (hasErrors) {
            return
        }
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

    return (
        <form className="productForm" onSubmit={onSubmit}>
            <h2>{editId ? "Edit Product" : "Create Product"}</h2>
            <div className="productInputGroup">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={newProduct.name}
                    onChange={handleChange}
                />
                {errors.name && (
                    <p className="inputError">{errors.name}</p>
                )}
            </div>
            <div className="productInputGroup">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={newProduct.description}
                    onChange={handleChange}
                />
                {errors.description && (
                    <p className="inputError">{errors.description}</p>
                )}
            </div>
            <div className="productInputGroup">
                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={newProduct.price}
                    onChange={handleChange}
                />
                {errors.price && (
                    <p className="inputError">{errors.price}</p>
                )}
            </div>
            <div className="productInputGroup">
                <label htmlFor="petType">Pet Type</label>
                <select
                    id="petType"
                    name="petType"
                    multiple
                    value={newProduct.petType}
                    onChange={handlePetTypeChange}
                >
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="fish">Fish</option>
                    <option value="other">Other</option>
                </select>
                {errors.petType && (
                    <p className="inputError">{errors.petType}</p>
                )}
            </div>
            <div className="productInputGroup">
                <label htmlFor="stock">Stock</label>
                <input
                    type="number"
                    id="stock"
                    name="stock"
                    min="0"
                    value={newProduct.stock}
                    onChange={handleChange}
                />
                {errors.stock && (
                <p className="inputError">{errors.stock}</p>
                )}              

            </div>
            <div className="productInputGroup">
                <label htmlFor="category">Category</label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    value={newProduct.category}
                    onChange={handleChange}
                />
                {errors.category && (
                <p className="inputError">{errors.category}</p>
                )}
            </div>
            <div className="productInputGroup">
                <label htmlFor="brand">Brand</label>
                <input
                    type="text"
                    id="brand"
                    name="brand"
                    value={newProduct.brand}
                    onChange={handleChange}
                />
                {errors.brand && (
                <p className="inputError">{errors.brand}</p>
                )}
            </div>
            <div className="productInputGroup">
                <label>Images</label>
                <div className="imageFields">
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
                </div>  
                {errors.image && (
                <p className="inputError">{errors.image}</p>
                )}
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
            </div>
        </form>
    )
}

//Dejar la opcion other?

//Profe si estas leyendo esto, originalmente mi idea era Cats, Dogs, Fish, Birds y Exotic(serpientes, etc) Pero no me dio el tiempo
//jajaja asi que quedo solo cats, dogs y fish...Por eso tambien en la foto del carrusel de promos hay aves. 