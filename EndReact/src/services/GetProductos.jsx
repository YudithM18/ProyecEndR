async function getProductos() {
    try {
        const response = await fetch('http://localhost:3001/producto/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching products');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export default getProductos;