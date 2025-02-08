// 1. GCS file interactions
// 2. Local file interactions

import {Storage} from '@google-cloud/storage';
import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';

const storage = new Storage();

const rawVideoBucketName = 'staticShock-yt-raw-videos';
const processedVideoBucketName = 'staticShock-yt-processed-videos';

const localRawVideoPath = './raw-videos';
const loacalProcessedVideoPath = './processed-videos';

// Creates local directories for raw and processed videos
export function setupDirectories() {}

/**
 * @param rawVideoName - The name of the file to convert from {@link localRawVideoPath}.
 * @param processedVideoName - The name of the file to covert to {@link loacalProcessedVideoPath}.
 * @returns A promise that resolves when the video has been converted.
 */
export function convertVideo(rawVideoName: string, processedVideoName: string) {
	return new Promise<void>((resolve, reject) => {
		ffmpeg(`${localRawVideoPath}/${rawVideoName}`)
			.outputOptions('-vf', 'scale=-1:360') // 360p
			.on('end', () => {
				console.log('Video processing finished successfully');
				resolve();
			})
			.on('error', (err) => {
				console.log(`An error occurred: ${err.message}`);
				reject(err);
			})
			.save(`${loacalProcessedVideoPath}/${processedVideoName}`);
	});
}

/**
 * @param fileName - The name of the file to download from the 
 * {@link rawVideoBucketName} bucket into the {@link localRawVideoPath} folder.
 * @returns A promise that resolves when the file has been downloaded.
 */
export async function downloadRawVideo(fileName: string) {

}

/**
 * @param fileName - The name of the file to upload from the 
 * {@link loacalProcessedVideoPath} folder into the {@link processedVideoBucketName}.
 * @returns A promise that resolves when the file has been uploaded.
 */
export async function uploadProcessedVideo(fileName: string) {
    
}