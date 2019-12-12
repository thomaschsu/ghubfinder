class GitHub {
    constructor() {
        this.client_id = '3d7c779cf023b7da0239';
        this.client_secret = 'eca5a252c6a4228e7adb587bf1bb5ef5d4575743';
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}