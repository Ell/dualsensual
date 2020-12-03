// @ts-ignore
interface HTMLAudioElement {
  setSinkId: (sinkId: string) => Promise<undefined>,
}

export async function getAudioDevices(): Promise<MediaDeviceInfo[]>{
  const devices = await navigator.mediaDevices.enumerateDevices();

  return devices.filter(d => d.kind === "audiooutput" && d.label.indexOf("Wireless Controller") != -1);
}

export async function getUserMedia(): Promise<MediaStream> {
  const constraints = { audio: true };

  return navigator.mediaDevices.getUserMedia(constraints);
}
