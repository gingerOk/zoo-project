function id() {
    return Math.floor(new Date().getTime() + Math.random() * 1e6).toString(36);
  }

export const posts = [
    {
        id: id(),
        title: 'Ogre-faced spiders have great hearing—without ears',
        img: './img/posts/spider.jpg',
        shortDescription: 'These big-eyed arachnids use organs in their legs to hear a surprisingly diverse range of sounds, an ability not seen in other spiders.'
    },
    {
        id: id(),
        title: 'How animals choose their leaders, from brute force to democracy',
        img: './img/posts/chimpanzees.jpg',
        shortDescription: 'As Americans vote in the 2020 presidential election, we looked at how animals from elephants to bees keep their societies in line'
    }
]