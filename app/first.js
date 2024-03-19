export default async function First() {
    const res = await fetch("http://localhost:3000/api/first",{
        cache: "no-store"
    });
    const arr = await res.json();

    return(
        <>
            <p>1</p>
            <p>
                {arr.map((item) => (
                    <span>{item}</span>
                ))}
            </p>
            <p>3</p>
        </>
    )
}