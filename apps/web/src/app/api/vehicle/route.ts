import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        // Get the tenantId from the URL query string
        const {searchParams} = new URL(request.url);
        const tenantId = searchParams.get('tenantId');

        // Validate that the tenantId is provided
        if (!tenantId) {
            return NextResponse.json(
                {error: 'Missing required tenantId parameter'},
                {status: 400}
            );
        }

        // TODO: add the other import for vehicle and catch logic needed for the try.