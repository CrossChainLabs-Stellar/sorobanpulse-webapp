import { faker } from '@faker-js/faker';
import { sample } from 'lodash';



// ----------------------------------------------------------------------

const createObject = () => {
    const id = faker.datatype.uuid();
    const name = sample([
        'stellar/rs-soroban-sdk',
        'stellar/soroban-examples'
    ]);
    const devs = sample([
        {
            maxDevs: 4503,
            devs: 845
        },
        {
            maxDevs: 2537,
            devs: 181
        }
    ]);

    const maxDevs = devs.maxDevs;
    const devNumber = devs.devs;

    const contributions = sample([
        125503, 115891
    ]);

    const growth = sample([
        53.5, -11.7
    ]);
    const graf = "graf"

    return ({
        id: id,
        name: name,
        maxDevs: maxDevs,
        devNumber: devNumber,
        contributions: contributions,
        growth: growth,
        graf: graf,
    });
}


const mockData = [...Array(24)].map(() => {

    return createObject();
});


export default mockData;
