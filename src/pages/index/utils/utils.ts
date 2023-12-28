export class Utils {
  public static getFormattedTime(seconds: number): string {
    let result = "";

    let minutes = Math.trunc(seconds / 60);
    if (minutes > 9) {
      result += minutes.toString()
    } else {
      result += "0" + minutes.toString()
    }

    result += ":";

    let secondsLeft = seconds - 60 * minutes;
    if (secondsLeft > 9) {
      result += secondsLeft.toString()
    } else {
      result += "0" + secondsLeft.toString()
    }

    return result;
  }

}
