import './styles.css';
import * as productService from '../../../../services/product-service';
import editIcon from '../../../../assets/edit.svg';
import deleteIcon from '../../../../assets/delete.svg';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../../models/product';
import SearchBar from '../../../../components/SearchBar';
import ButtonNextPage from '../../../../components/ButtonNextPage';
import DialogInfo from '../../../../components/DialogInfo';
import DialogConfirmation from '../../../../components/DialogConfirmation';


type QueryParams = {
    page: number;
    name: string;
}

export default function ProductListing() {

    const [dialogInfoData, setDialogInfoData] = useState({
        visible: false,
        messege: "Operação com sucesso!"
    });

    const [dialogConfirmationData, setDialogConfirmationData] = useState({
        visible: false,
        messege: "Tem certeza?"
    });

    const [isLastPage, setIsLastPage] = useState(false);

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [queryParams, setQueryParams] = useState<QueryParams>({
        page: 0,
        name: ""
    });

    useEffect(() => {
        productService.findPageRequest(queryParams.page, queryParams.name)
            .then(response => {
                const nextPage = response.data.content;
                setProducts(products.concat(nextPage));
                setIsLastPage(response.data.last);
            })
    }, [queryParams]);

    function handleSearch(seartchText: string) {
        setProducts([]);
        setQueryParams({ ...queryParams, page: 0, name: seartchText });
    }

    function handleNextPageClick() {
        setQueryParams({ ...queryParams, page: queryParams.page + 1 });
    }

    function handleDialogInfoClose() {
        setDialogInfoData({...dialogConfirmationData,visible: false});
    }

    function handleDeleteClick() {
        setDialogConfirmationData({...dialogConfirmationData,visible: true});
        
    }

    function handleDialogConfirmationAnswer(ansewer: boolean) {
            console.log("Resposta", ansewer);
            setDialogConfirmationData({...dialogConfirmationData,visible: false});
    }

    return (

        <main>
            <section id="product-listing-section" className="dsc-container">
                <h2 className="dsc-section-title dsc-mb20">Cadastro de produtos</h2>

                <div className="dsc-btn-page-container dsc-mb20">
                    <div className="dsc-btn dsc-btn-white">Novo</div>
                </div>

                <SearchBar onSearch={handleSearch} />

                <table className="dsc-table dsc-mb20 dsc-mt20">
                    <thead>
                        <tr>
                            <th className="dsc-tb576">ID</th>
                            <th></th>
                            <th className="dsc-tb768">Preço</th>
                            <th className="dsc-txt-left">Nome</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => (
                                <tr key={product.id}>
                                    <td className="dsc-tb576">{product.id}</td>
                                    <td><img className="dsc-product-listing-image" src={product.imgUrl} alt="Computer" /></td>
                                    <td className="dsc-tb768">{product.price.toFixed(2)}</td>
                                    <td className="dsc-txt-left">{product.name}</td>
                                    <td><img className="dsc-product-listing-btn" src={editIcon} alt="Editar" /></td>
                                    <td><img onClick={handleDeleteClick} className="dsc-product-listing-btn" src={deleteIcon} alt="Deletar" /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                {
                    !isLastPage &&
                    <ButtonNextPage onNextPage={handleNextPageClick} />
                }
            </section>

            {
                dialogInfoData.visible &&
                <DialogInfo messege={dialogInfoData.messege} onDialogClose={handleDialogInfoClose} />
            }
            {
                dialogConfirmationData.visible &&
                <DialogConfirmation messege={dialogConfirmationData.messege} onDialogAnswer={handleDialogConfirmationAnswer} />
            }
        </main>
    );
}
