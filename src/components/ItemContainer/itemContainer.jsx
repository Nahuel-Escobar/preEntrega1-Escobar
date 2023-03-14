import styles from './item.module.scss'

const ItemList = ({gretting})=> {
    return (
        <main>
            <section className='title-container'>
                <h2>{gretting}</h2>
            </section>
        </main>
    )
}

export default ItemList