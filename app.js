(() => {


    document.querySelector('#ham').addEventListener('click', () => {
        document.querySelector('#ham').classList.toggle('open');
        document.querySelector('#hone').classList.toggle('hidden');
        document.querySelector('#btn').classList.toggle('hidden');
        document.querySelector('#nav').classList.toggle('hidden');
    });


})();