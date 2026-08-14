import "./PetTypeFilter.css"

export default function PetTypeFilter({ selectedPetType, onPetTypeChange }) {
    const petTypes = ["All", "Cat", "Dog", "Fish"];

    return (
        <div className="petTypeFilter">
            {petTypes.map((type) => (
                <button
                    key={type}
                    onClick={() => onPetTypeChange(type)}
                    className={selectedPetType === type ? "active" : ""}
                >{type}</button>
            ))}
        </div>
    )
}