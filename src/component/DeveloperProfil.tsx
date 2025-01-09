type DeveloperPropsType = {
    name: string,
    age: number
}

export default function DeveloperProfil ({name, age}: DeveloperPropsType) {
    return <>
            <h6>website made by: {name} ({age})</h6>
    </>
}