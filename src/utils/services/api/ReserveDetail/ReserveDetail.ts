import React from 'react'
import axiosInstance from '../../interceptor/axios'

export const ReserveDetail = () => axiosInstance.get('/houses/5')



