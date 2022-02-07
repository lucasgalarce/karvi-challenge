import { Request, Response } from 'express'
import axios from 'axios'
import config from '../config/index'

const CarsController = {

    async getCars (req: Request, res: Response) {
        
        try {

            const { site } = req.query;

            if(site === undefined) return res.status(400).json({msg: 'Site is required'});
            
            const url: string = `https://used-cars-api.development.karvi.com.ar/cars/challenge?site=${site}`;

            const axiosConfig = {
                headers: {
                    'api-key': config.API_KEY!,
                }
            }

            const response = await axios.get(url, axiosConfig);

            type Car = {
                id: number,
                city: string,
                state: string,
                year: string,
                brand: string,
                model: string,
                version: string,
                price: number
                mileage: number
                image: string,
                certificate: boolean,
                promoted: boolean
            }
            
            const sortCars = () => {

                const carsArray = response.data.sort( (a: Car ,b: Car) => {

                    let yearA: number;
                    let yearB: number;

                    if(site === 'br') {

                        yearA = Number(a.year.split('/')[0]);
                        yearB = Number(b.year.split('/')[0]);
                    } else {

                        yearA = Number(a.year);
                        yearB = Number(b.year);
                    }

                    if (yearA < yearB) return 1;
                    if (yearA > yearB) return -1;
                    else {
                        if (a.price > b.price) return 1;
                        else if (a.price < b.price) return -1;
                        return 0;
                    }
                });

                return carsArray;
            }

            const cars = sortCars();

            type Filter = {
                city: string[],
                state: string[],
                brand: string[],
                model: string[]
            }

            const city: string[] = [];
            const state: string[] = [];
            const brand: string[] = [];
            const model: string[] = [];

            for(let car of cars){

                if(!city.includes(car.city)) {
                    city.push(car.city)
                }

                if(!state.includes(car.state)) {
                    state.push(car.state)
                }

                if(!brand.includes(car.brand)) {
                    brand.push(car.brand)
                }

                if(!model.includes(car.model)) {
                    model.push(car.model)
                }
            }

            const filter:Filter = {
                city,
                state,
                brand,
                model
            }

            res.status(200).json({
                items: cars,
                filters: filter,
            })

        } catch(e) {
            console.log(e)
        }
    }
}

export default CarsController;