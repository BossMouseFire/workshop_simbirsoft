interface ILocation{
    city: string;
    coordinates: number[];
    points: IPoint[]
}

export interface IPoint{
    address: string;
    coordinates: number[];
}

export const LocationData = <ILocation[]>[
    {
        city: "Ульяновск",
        coordinates: [54.300854135750114,48.48230500000002],
        points: [
            {
                address: "Московское шоссе, 61А",
                coordinates: [54.30747168731182,48.336749060909014]
            },
            {
                address: "Московское шоссе, 102Б/1",
                coordinates: [54.30594899073337,48.355115941712796]
            },
            {
                address: "Октябрьская улица, 26Б",
                coordinates: [54.29804091002262,48.34099430719289]
            }
        ]
    },
    {
        city: "Казань",
        coordinates: [55.79363688621718,49.123832670848714],
        points: [
            {
                address: "улица Декабристов, 79",
                coordinates: [55.81747255747704,49.09393071805489]
            },
            {
                address: "Чистопольская улица, 5",
                coordinates: [55.81949673099699,49.102481747818366]
            }
        ]
    },
]