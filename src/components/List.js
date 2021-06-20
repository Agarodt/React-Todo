import Item from'./Item'

export default function List(props) {
return (
    props.value.map(something => {return <Item bam = {something} key = {something.id}/>})
)
}