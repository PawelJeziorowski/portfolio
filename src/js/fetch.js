import Star from '../images/smallStar.svg'
const username = 'PawelJeziorowski';
const repositoriesContainer = document.querySelector('.repo--js');


console.log('Hi! If you want to talk, write me an email: jeziorowski.pawel.pj@gmail.com 😎')

fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(response => {
        for (let repository of response) {
            const { name, html_url, description, homepage, stargazers_count, topics } = repository;

            let tags = ``;

            for (let tag of topics) {
                tags += `<p class="bg-slate-600 rounded-sm h-7 px-4 w-auto p-1">${tag}</p>`
            }

            const element = `<div class=" w-648px mr-4 overflow-clip bg-gradient-to-br from-white/10 to-white/5 rounded-3xl max-xl:mb-5 max-xl:h-full max-xl:w-72">
                    <div
                        class=" w-648px h-11 px-4 bg-gradient-to-br from-white/10 to-white/5 shadow-shadowproject flex justify-start items-center mx-auto rounded-t-3xl max-xl:w-72">
                        <p class="w-3 h-3 rounded-full bg-black opacity-50 ml-1.5"> </p>
                        <p class="w-3 h-3 rounded-full bg-black opacity-50 ml-1.5"> </p>
                        <p class="w-3 h-3 rounded-full bg-black opacity-50 ml-1.5"> </p>
                    </div>
                    <div class=" w-648px rounded-b-3xl ring-1 ring-inset ring-background p-10 mx-auto flex flex-col flex-wrap max-xl:w-72 h-auto max-xl:p-5 max-xl:h-full">
                        <div class="flex flex-row justify-start items-center mb-4 gap-4">
                            <p class="text-white text-2xl font-bold p-1">${name} </p>
                            <div class="text-gray-400 h-6 w-auto  flex rounded-sm">
                            <img class=" w-6 h-6" src="${Star}" width="24" height="24"></img>${stargazers_count}

                            </div>
                        </div>
                        <div class="text-gray-400 text-xl mb-4 ">${description}</div>
                        <div aria-label='${tags}'
                            class="text-white px-4 h-auto w-auto flex justify-start items-center flex-wrap gap-4 mb-10 max-xl:mb-0 max-xl:h-auto max-xl:text-sm">
                                ${tags}
                        </div>
                        <div class="flex max-xl:flex-col gap-4 max-xl:mt-8">
                            <a href="${homepage}" target="_blank" rel="noopener noreferrer" id="view"
                                class="group w-64 h-16 text-xl text-sky-400 font-bold hover:text-sky-600 group-hover:stroke-sky-600  duration-500 bg-black ring-1 ring-black hover:ring-sky-600 rounded-2xl flex flex-row gap-1 place-content-center items-center max-xl:w-40 view--js">
                                <svg class="stroke-sky-400 group-hover:stroke-sky-600 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M22 9H2M2 7.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27977 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3H6.8C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8Z" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                               <p > View demo </p> </a>
                            <a href="${html_url}" target="_blank" rel="noopener noreferrer" id="source"
                                class="group w-64 h-16 text-xl text-sky-400 hover:text-sky-600  group-hover:stroke-sky-600  translate-colors duration-500 font-bold bg-black ring-1 ring-black hover:ring-sky-600 rounded-2xl flex flex-row gap-1 place-content-center items-center max-xl:w-40 source--js">
                                <svg class="stroke-sky-400 text-sky-400  group-hover:stroke-sky-600  translate-colors duration-500 " width="24" height="24" viewBox="0 0 24 24" fill="none"
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