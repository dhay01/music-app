import {setActivePinia, createPinia} from "pinia";
import useUserStore from "@/stores/user";

vi.mock("@/includes/firebase", ()=>({
    auth:{
        signInWithEmailAndPassword:()=>{
            return Promise.resolve()
        }
    }
}));
describe("stores", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });
    test("authenticate user", async () => {
        const store = useUserStore();
        // store.authenticate()

        expect(store.userLoggedIn).toBe(false);
        await store.authenticate({});
        expect(store.userLoggedIn).toBe(true);
    });
});