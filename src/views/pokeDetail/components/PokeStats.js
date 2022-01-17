export default function PokeStats({ stats }) {
    return (
        <>
        {stats?.map(({stat, base_stat}, index)=> (
            <div>
                <p>{stat}</p>
                <p>{base_stat}</p>
            </div>
        ))}
        </>
    )
}