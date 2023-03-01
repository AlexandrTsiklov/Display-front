export class AvatarManagerService {
    public IMAGES = [
        {
            'name': 'ava1',
            'url': '../../../../assets/images/ava1.jpg',
            'active': false
        },
        {
            'name': 'ava2',
            'url': '../../../../assets/images/ava2.jpg',
            'active': false
        },
        {
            'name': 'ava3',
            'url': '../../../../assets/images/ava3.jpg',
            'active': false
        },
        {
            'name': 'ava4',
            'url': '../../../../assets/images/ava4.jpg',
            'active': false
        },
        {
            'name': 'ava5',
            'url': '../../../../assets/images/ava5.jpg',
            'active': true
        },
        {
            'name': 'ava6',
            'url': '../../../../assets/images/ava6.jpg',
            'active': false
        },
        {
            'name': 'ava7',
            'url': '../../../../assets/images/ava7.jpg',
            'active': false
        }
    ]

    public defaultImage =  {
        'name': 'nophoto',
        'url': '../../../../assets/images/nophoto.jpg',
        'active': false
    }

    public activeImage = this.IMAGES[5]

    public setAvatar(imageName: string) {
        for(let image of this.IMAGES) {
            if(image.active) {
                image.active = false
            }
            if(image.name == imageName) {
                image.active = true
                this.activeImage = image
            }
        }
        if(imageName == 'nophoto') {
            this.activeImage = this.defaultImage
            this.activeImage.active = true
        } else {
            this.defaultImage.active = false
        }
    }
}
