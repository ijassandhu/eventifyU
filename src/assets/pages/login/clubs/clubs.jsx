export default function Clubs(){
    return(
        <div className={styles.container}>
            <div className={styles.title}>Clubs</div>
            <div className={styles.clubContainer}>
                <div className={styles.club}>
                    <div className={styles.clubImage}></div>
                        <div className="h-[30%] w-[30%] bg-black"></div>
                </div>
            </div>
        </div>
    )
}