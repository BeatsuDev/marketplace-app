package no.ntnu.let.letapi.repository.chat;

import no.ntnu.let.letapi.model.chat.Chat;
import no.ntnu.let.letapi.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatRepository extends JpaRepository<Chat, Long>, CustomizedChatRepository {
}
