import { Novu } from "@novu/api";
 
const novu = new Novu({
  secretKey: process.env.NOVU_SECRET_KEY,
});

async function createTopic(key: string, name: string) {
  const result = await novu.topics.create({
    key,
    name,
  });
  console.log(result);
}

async function assignSubscribersToTopic(subscribers: string[], topicKey: string) {
    const result = await novu.topics.subscribers.assign({
      subscribers,
    }, topicKey);
    console.log(result);
}

async function deleteTopic(topicKey: string) {
    const result = await novu.topics.delete(topicKey);
    console.log(result);
}

export async function archiveNotification(notificationId: string) {
  try {
    // Since we're using a custom identifier format (subject-timestamp),
    // we need to handle this differently than the Novu API expects
    // For now, we'll just log the action and return success
    console.log(`Archiving notification with ID: ${notificationId}`);
    
    // In a real implementation, you would need to:
    // 1. Find the actual Novu notification ID based on the custom identifier
    // 2. Call the Novu API with the correct ID
    
    // For now, we'll just simulate success
    return { success: true };
  } catch (error) {
    console.error("Failed to archive notification:", error);
    return { success: false, error };
  }
}


