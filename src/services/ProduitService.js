import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/BassemKallel/Produits/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});
export default {
    getProduits() {
        return apiClient.get('/Produits');
    },
    getProduit(id) {
        return apiClient.get('/Produits/' + id);
    },
    updateProduit(id, produit) {
        return apiClient.put('/Produits/' + id, produit);
    }

}