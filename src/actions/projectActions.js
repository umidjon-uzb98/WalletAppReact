import axios from 'axios'
import {GET_ERRORS, GET_WALLETS, DELETE_WALLET, GET_WALLET} from './types'

export const createWallet = (newWallet, history) => async dispatch => {
    await axios.post('/wallet', newWallet)
        .then((res) => {
               // history.push('/dashboard')
            window.location="/dashboard"
        }).catch((err) => {
            dispatch({type:GET_ERRORS,payload:err.response.data})
        })
}

export const updateWallet = (id,updatedWallet, history) => async dispatch => {
    await axios.put(`/wallet/${id}`, updatedWallet)
        .then((res) => {
            //    history.push('/dashboard')
            window.location="/dashboard"
        }).catch((err) => {
            dispatch({type:GET_ERRORS,payload:err.response.data})
        })
}

export const getWallets = () => async dispatch => {
    await axios.get('/wallet')
        .then((res) => {
            dispatch({type:GET_WALLETS,payload:res.data})
        })
}

export const getWallet = (id) => async dispatch => {
    await axios.get(`/wallet/${id}`)
        .then((res) => {
            dispatch({type:GET_WALLET,payload:res.data})
        })
}

export const deleteWallet = (id) => async dispatch => {
    await axios.delete(`/wallet/${id}`)
        .then((res) => {
            dispatch({type:DELETE_WALLET,payload:id})
        })
}


// //Transactions

export const createTransaction = (newTransaction, history,walletid) => async dispatch => {
    await axios.post(`/transaction/${walletid}`, newTransaction)
        .then((res) => {
            // history.push(`/transactions/${walletid}`)
            //    history.push('/dashboard')
            window.location=`/transactions/${walletid}`
        }).catch((err) => {
            console.log(err);
            dispatch({type:GET_ERRORS,payload:err.response.data})
        })
}