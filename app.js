(() => {


    document.querySelector('#ham').addEventListener('click', () => {
        document.querySelector('#ham').classList.toggle('open');
        document.querySelector('#hone').classList.toggle('hidden');
        document.querySelector('#btn').classList.toggle('hidden');
        document.querySelector('#nav').classList.toggle('hidden');
    });



    const observerOptions = {
        rootMargin: '1000px 0px 0px 0px',
        threshold: 0
    };

    const observe = entries => entries.forEach(entry => {
        entry.target.classList.toggle('inviewport', entry.isIntersecting);
    });

    const obs = new IntersectionObserver(observe, observerOptions);

    document.querySelectorAll('#grid>div').forEach(el => obs.observe(el));





})();