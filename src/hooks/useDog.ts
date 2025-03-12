import { onMounted, reactive } from "vue";
import axios from 'axios';


export default function useDog() {

    let dogList = reactive([
        'https://images.dog.ceo/breeds/bulldog-boston/n02096585_1668.jpg'

    ]);

    async function addDog() {

        try {
            await axios.get('https://dog.ceo/api/breeds/image/random')
                .then(response => {
                    dogList.push(response.data.message);
                });
        }
        catch (error) {
            alert(error);

        }

    }

    onMounted(() => {
        addDog();
    })

    return { dogList, addDog };
}


// import useDog from '@/hooks/useDog'


//用一个对象接一下useDog 返回的对象
// const {dogList, addDog} = useDog()
