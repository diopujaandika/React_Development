const ProductsPage = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-sm bg-gray-800 border-gray-700 rounded-lg shadow">
                <a href="#">
                    <img 
                    src="/images/products-1.png" 
                    alt="product"
                    className="p-8 rounded-t-lg"
                    />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl font-semibold trackin-tight text-white">Sepatu Baru</h5>
                        <p className="text-m text-white">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProductsPage;