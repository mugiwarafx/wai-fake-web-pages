const initalHTML = `
<div class="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
    <div class="py-8">
    <h1 class="text-4xl font-bold">@eventify</h1>
    <p class="mt-2 text-lg text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in erat nunc. Vivamus fringilla posuere tempor. Etiam quis malesuada ligula. Mauris efficitur vel metus rhoncus tempus. Donec non faucibus nunc, sed ultrices mi. Sed tortor felis, venenatis eget dui dictum, dignissim condimentum urna. Nunc ut urna cursus, hendrerit metus at, sodales est. Suspendisse convallis, erat nec porttitor pellentesque, elit velit mollis urna, quis dapibus metus turpis quis odio. Sed aliquet blandit tortor, id consectetur ex venenatis et. Suspendisse laoreet a eros at gravida. Suspendisse potenti. Suspendisse tortor magna, convallis sit amet turpis sit amet, maximus euismod tortor. Vivamus augue metus, dictum sit amet egestas eget, consequat ac quam.
    </p>
    <div class="mt-4 flex space-x-4">
        <a class="text-lg underline" href="#">Event loop</a>
        <a class="text-lg underline" href="#">Event trigger</a>
    </div>
    </div>
    <div class="py-12">
    <h2 class="text-2xl font-bold">Unstyled</h2>
    <p class="mt-2 text-lg text-gray-600">This is how form elements look out of the box.</p>
    <div class="mt-8 max-w-md">
        <div class="grid grid-cols-1 gap-6">
        <label class="block">
            <span class="text-gray-700">Full name</span>
            <input type="text" class="mt-1 block w-full" placeholder="">
        </label>
        <label class="block">
            <span class="text-gray-700">Email address</span>
            <input type="email" class="mt-1 block w-full" placeholder="john@example.com">
        </label>
        <label class="block">
            <span class="text-gray-700">When is your event?</span>
            <input type="date" class="mt-1 block w-full">
        </label>
        <label class="block">
            <span class="text-gray-700">What type of event is it?</span>
            <select class="block w-full mt-1">
            <option>Corporate event</option>
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Other</option>
            </select>
        </label>
        <label class="block">
            <span class="text-gray-700">Additional details</span>
            <textarea class="mt-1 block w-full" rows="3"></textarea>
        </label>
        <div class="block">
            <div class="mt-2">
            <div>
                <label class="inline-flex items-center">
                    <button class="rounded-full">Next</button>
                </label>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
`

const nextHTML = `
<div class="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
    <div class="py-8">
    <h1 class="text-4xl font-bold">@loopings</h1>
    <p class="mt-2 text-lg text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in erat nunc. Vivamus fringilla posuere tempor. Etiam quis malesuada ligula. Mauris efficitur vel metus rhoncus tempus. Donec non faucibus nunc, sed ultrices mi. Sed tortor felis, venenatis eget dui dictum, dignissim condimentum urna. Nunc ut urna cursus, hendrerit metus at, sodales est. Suspendisse convallis, erat nec porttitor pellentesque, elit velit mollis urna, quis dapibus metus turpis quis odio. Sed aliquet blandit tortor, id consectetur ex venenatis et. Suspendisse laoreet a eros at gravida. Suspendisse potenti. Suspendisse tortor magna, convallis sit amet turpis sit amet, maximus euismod tortor. Vivamus augue metus, dictum sit amet egestas eget, consequat ac quam.
    </p>
    <p class="mt-2 text-lg text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in erat nunc. Vivamus fringilla posuere tempor. Etiam quis malesuada ligula. Mauris efficitur vel metus rhoncus tempus. Donec non faucibus nunc, sed ultrices mi. Sed tortor felis, venenatis eget dui dictum, dignissim condimentum urna. Nunc ut urna cursus, hendrerit metus at, sodales est. Suspendisse convallis, erat nec porttitor pellentesque, elit velit mollis urna, quis dapibus metus turpis quis odio. Sed aliquet blandit tortor, id consectetur ex venenatis et. Suspendisse laoreet a eros at gravida. Suspendisse potenti. Suspendisse tortor magna, convallis sit amet turpis sit amet, maximus euismod tortor. Vivamus augue metus, dictum sit amet egestas eget, consequat ac quam.
    </p>
    <div class="mt-4 flex space-x-4">
        <a class="text-lg underline" href="#">eventify</a>
        <a class="text-lg underline" href="#">Event trigger</a>
    </div>
    </div>
</div>
`

const nextButton = document.getElementById('nextBtn');
const mainContent = document.getElementById('mainContentParent');

nextButton.addEventListener('click', () => {
    mainContent.innerHTML = nextHTML
  }, { once: true });
