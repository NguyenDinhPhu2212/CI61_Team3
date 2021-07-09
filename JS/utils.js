export function timeUpdate(curr_track, curr_time, total_duration, slider) {
    // Check if the current track duration is a legible number
    if (!isNaN(curr_track.duration)) {
        slider.value = curr_track.currentTime * (100 / curr_track.duration);

        // Calculate the time left and the total duration
        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(
            curr_track.currentTime - currentMinutes * 60
        );
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(
            curr_track.duration - durationMinutes * 60
        );

        // Add a zero to the single digit time values
        if (currentSeconds < 10) {
            currentSeconds = "0" + currentSeconds;
        }
        if (durationSeconds < 10) {
            durationSeconds = "0" + durationSeconds;
        }
        if (currentMinutes < 10) {
            currentMinutes = "0" + currentMinutes;
        }
        if (durationMinutes < 10) {
            durationMinutes = "0" + durationMinutes;
        }

        // Display the updated duration

        curr_time.innerHTML = currentMinutes + ":" + currentSeconds;
        console.log(curr_time.innerHTML);
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}
