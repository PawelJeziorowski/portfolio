const username = 'PawelJeziorowski';
const repositoriesContainer = document.querySelector('.repo--js');


fetch(`https://api.github.com/users/${username}/repos`)
.then(response => response.json())
.then(response =>{
    for (let repository of response){
        const {name, html_url, description, homepage, stargazers_count, topics} = repository;

        let tags = ``;

        for (let tag of topics){
            tags +=`<p class="bg-slate-600 rounded-sm h-7 px-4 w-auto p-1">${tag}</p>`
        }

        const element = `<div class=" w-648px mr-4 overflow-clip bg-gradient-to-br from-white/10 to-white/5 rounded-3xl max-xl:mb-5 max-xl:h-full max-xl:w-72">
                    <div
                        class=" w-648px h-11 px-4 bg-gradient-to-br from-white/10 to-white/5 shadow-shadowproject flex justify-start items-center mx-auto rounded-t-3xl max-xl:w-72">
                        <p class="w-3 h-3 rounded-full bg-black opacity-50 ml-1.5"> </p>
                        <p class="w-3 h-3 rounded-full bg-black opacity-50 ml-1.5"> </p>
                        <p class="w-3 h-3 rounded-full bg-black opacity-50 ml-1.5"> </p>
                    </div>
                    <div class=" w-648px rounded-b-3xl ring ring-black p-10 mx-auto flex flex-col flex-wrap max-xl:w-72 h-auto max-xl:p-5 max-xl:h-full">
                        <div class="flex flex-row justify-start items-center mb-4 gap-4">
                            <p class="text-white text-2xl font-bold p-1">${name} </p>
                            <div class="text-gray-400 h-6 w-auto  flex rounded-sm">
                                <svg class="stroke-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.2788 3.45357C11.5092 2.98663 11.6245 2.75316 11.7809 2.67856C11.917 2.61366 12.0752 2.61366 12.2113 2.67856C12.3678 2.75316 12.483 2.98663 12.7135 3.45357L14.9002 7.88353C14.9682 8.02138 15.0022 8.09031 15.0519 8.14383C15.096 8.19121 15.1488 8.2296 15.2074 8.25687C15.2737 8.28767 15.3497 8.29879 15.5018 8.32102L20.3931 9.03596C20.9082 9.11124 21.1657 9.14888 21.2849 9.27469C21.3886 9.38414 21.4373 9.53455 21.4176 9.68402C21.3949 9.85583 21.2085 10.0374 20.8356 10.4006L17.2975 13.8466C17.1873 13.954 17.1321 14.0078 17.0965 14.0717C17.065 14.1282 17.0448 14.1904 17.037 14.2547C17.0282 14.3273 17.0412 14.4032 17.0672 14.5549L17.9021 19.4224C17.9901 19.9358 18.0341 20.1924 17.9514 20.3447C17.8794 20.4772 17.7515 20.5702 17.6032 20.5977C17.4327 20.6293 17.2022 20.5081 16.7412 20.2656L12.3685 17.966C12.2322 17.8944 12.1641 17.8586 12.0923 17.8445C12.0288 17.832 11.9634 17.832 11.8999 17.8445C11.8281 17.8586 11.76 17.8944 11.6238 17.966L7.25101 20.2656C6.79001 20.5081 6.5595 20.6293 6.38906 20.5977C6.24077 20.5702 6.11281 20.4772 6.04083 20.3447C5.95809 20.1924 6.00212 19.9358 6.09016 19.4224L6.92498 14.5549C6.951 14.4032 6.96402 14.3273 6.95521 14.2547C6.94741 14.1904 6.9272 14.1282 6.8957 14.0717C6.86011 14.0078 6.80497 13.954 6.69468 13.8466L3.15665 10.4006C2.78375 10.0374 2.5973 9.85583 2.57462 9.68402C2.55488 9.53455 2.60364 9.38414 2.70734 9.27469C2.82653 9.14888 3.08406 9.11124 3.59913 9.03596L8.4904 8.32102C8.64251 8.29879 8.71857 8.28767 8.78481 8.25687C8.84345 8.2296 8.89625 8.19121 8.94028 8.14383C8.99 8.09031 9.02402 8.02138 9.09206 7.88353L11.2788 3.45357Z"
                                        stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>${stargazers_count}

                            </div>
                        </div>
                        <div class="text-gray-400 text-xl mb-4 ">${description}</div>
                        <div aria-label='${tags}'
                            class="text-white px-4 h-auto w-auto flex justify-start items-center flex-wrap gap-4 mb-10 max-xl:mb-0 max-xl:h-auto max-xl:text-sm">
                                ${tags}
                        </div>
                        <div class="flex max-xl:flex-col gap-4 max-xl:mt-8">
                            <a href="${homepage}" target="_blank" rel="noopener noreferrer" id="view"
                                class="group w-64 h-16 text-xl text-lime-500 font-bold hover:text-lime-700 group-hover:stroke-lime-700  duration-500 bg-black rounded-2xl flex flex-row gap-1 place-content-center items-center max-xl:w-40 view--js">
                                <svg class="stroke-lime-500 group-hover:stroke-lime-700 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.00002 21.8174C4.6026 22 5.41649 22 6.8 22H17.2C18.5835 22 19.3974 22 20 21.8174M4.00002 21.8174C3.87082 21.7783 3.75133 21.7308 3.63803 21.673C3.07354 21.3854 2.6146 20.9265 2.32698 20.362C2 19.7202 2 18.8802 2 17.2V6.8C2 5.11984 2 4.27976 2.32698 3.63803C2.6146 3.07354 3.07354 2.6146 3.63803 2.32698C4.27976 2 5.11984 2 6.8 2H17.2C18.8802 2 19.7202 2 20.362 2.32698C20.9265 2.6146 21.3854 3.07354 21.673 3.63803C22 4.27976 22 5.11984 22 6.8V17.2C22 18.8802 22 19.7202 21.673 20.362C21.3854 20.9265 20.9265 21.3854 20.362 21.673C20.2487 21.7308 20.1292 21.7783 20 21.8174M4.00002 21.8174C4.00035 21.0081 4.00521 20.5799 4.07686 20.2196C4.39249 18.6329 5.63288 17.3925 7.21964 17.0769C7.60603 17 8.07069 17 9 17H15C15.9293 17 16.394 17 16.7804 17.0769C18.3671 17.3925 19.6075 18.6329 19.9231 20.2196C19.9948 20.5799 19.9996 21.0081 20 21.8174M16 9.5C16 11.7091 14.2091 13.5 12 13.5C9.79086 13.5 8 11.7091 8 9.5C8 7.29086 9.79086 5.5 12 5.5C14.2091 5.5 16 7.29086 16 9.5Z"
                                        stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                               <p > View demo </p> </a>
                            <a href="${html_url}" target="_blank" rel="noopener noreferrer" id="source"
                                class="group w-64 h-16 text-xl text-lime-500 hover:text-lime-700 group-hover:stroke-lime-700 translate-colors duration-500 font-bold bg-black rounded-2xl flex flex-row gap-1 place-content-center items-center max-xl:w-40 source--js">
                                <svg class="stroke-lime-500 text-lime-500  group-hover:stroke-lime-700 translate-colors duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.00002 21.8174C4.6026 22 5.41649 22 6.8 22H17.2C18.5835 22 19.3974 22 20 21.8174M4.00002 21.8174C3.87082 21.7783 3.75133 21.7308 3.63803 21.673C3.07354 21.3854 2.6146 20.9265 2.32698 20.362C2 19.7202 2 18.8802 2 17.2V6.8C2 5.11984 2 4.27976 2.32698 3.63803C2.6146 3.07354 3.07354 2.6146 3.63803 2.32698C4.27976 2 5.11984 2 6.8 2H17.2C18.8802 2 19.7202 2 20.362 2.32698C20.9265 2.6146 21.3854 3.07354 21.673 3.63803C22 4.27976 22 5.11984 22 6.8V17.2C22 18.8802 22 19.7202 21.673 20.362C21.3854 20.9265 20.9265 21.3854 20.362 21.673C20.2487 21.7308 20.1292 21.7783 20 21.8174M4.00002 21.8174C4.00035 21.0081 4.00521 20.5799 4.07686 20.2196C4.39249 18.6329 5.63288 17.3925 7.21964 17.0769C7.60603 17 8.07069 17 9 17H15C15.9293 17 16.394 17 16.7804 17.0769C18.3671 17.3925 19.6075 18.6329 19.9231 20.2196C19.9948 20.5799 19.9996 21.0081 20 21.8174M16 9.5C16 11.7091 14.2091 13.5 12 13.5C9.79086 13.5 8 11.7091 8 9.5C8 7.29086 9.79086 5.5 12 5.5C14.2091 5.5 16 7.29086 16 9.5Z"
                                        stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p > Source code </p></a>
                        </div>
                    </div>

                </div>`;
        repositoriesContainer.insertAdjacentHTML('beforeend', element);
    }
})
.catch((e) => console.log(e))