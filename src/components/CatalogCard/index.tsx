import './styles.css';
export default function CatalogCard() {

    return (

        <div className="dsc-card">
            <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg" alt="Smat Tv" />
            </div>
            <div className="dsc-catalog-card-bottom">
                <h3>R$ 5000,00</h3>
                <h4>
                    Smart Tv
                </h4>
            </div>
        </div>

    );


}