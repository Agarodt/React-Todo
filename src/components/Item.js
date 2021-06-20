const styles = {
    item: {
        border: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        width: 300,
        margin: 'auto'
    }
}

export default function Item({bam}) {
    return (
        <div style = {styles.item}>
        <h1>{bam.title}</h1>
        <h2>{bam.email}</h2>
        </div>
    )
}