//<!---- ".page.server.ts / .page.server.js = GET DATA / LOAD / COOKIES / HTTP STATUS" -->

import { redirect } from "@sveltejs/kit"
import type { Actions } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ cookies }) => {

    //=========== FIX 20221223
    if (cookies.get("auth") == "regularusertoken") {
        // process
    } else {
        throw redirect(303, "/protected")
    }
    //=========== FIX 20221223
}

